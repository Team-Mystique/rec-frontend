import React, { useState, useEffect, useMemo } from 'react';
import './CourseCatalog.css';
import { FaTh, FaThList, FaSearch, FaStar, FaFilter, FaTimes } from 'react-icons/fa';
import { MockCourse } from './MockCourse/MockCourse'; // Import your mock data
import Pagination from './Pagination/Pagination'; // Assuming you have a Pagination component
import FilterSidebar from './FilterSidebar/FilterSidebar'; // Assuming you have a FilterSidebar component

// Reusable Logo Component
const Logo = () => (
    <div className="logo-container-catalog">
        <img src="Logo.png" alt="Logo" className="logo" />
    </div>
);

// --- Main Catalog Component ---
const CourseCatalog = () => {
    // State Management
    const [courses, setCourses] = useState([]);
    const [displayedCourses, setDisplayedCourses] = useState([]);
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('popularity');
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filters, setFilters] = useState({
        category: [],
        level: '',
        price: 'all',
        duration: [],
    });

    const COURSES_PER_PAGE = 9;

    // Fetch courses on initial load
    useEffect(() => {
        setCourses(MockCourse);
    }, []);
    
    // This complex memoized value recalculates the course list only when dependencies change
    const filteredAndSortedCourses = useMemo(() => {
        let result = [...courses];

        // Filtering logic
        if (searchTerm) {
            result = result.filter(course =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (filters.category.length) {
            result = result.filter(course => filters.category.includes(course.category));
        }
        if (filters.level) {
            result = result.filter(course => course.level === filters.level);
        }
        if (filters.price !== 'all') {
            result = result.filter(course => filters.price === 'free' ? course.price === 0 : course.price > 0);
        }
        if (filters.duration.length) {
             result = result.filter(course => {
                return filters.duration.some(range => {
                    if (range === 'short' && course.durationHours <= 5) return true;
                    if (range === 'medium' && course.durationHours > 5 && course.durationHours <= 20) return true;
                    if (range === 'long' && course.durationHours > 20) return true;
                    return false;
                });
            });
        }
        
        // Sorting logic
        switch (sortBy) {
            case 'rating': result.sort((a, b) => b.rating - a.rating); break;
            case 'date': result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
            case 'price_asc': result.sort((a, b) => a.price - b.price); break;
            case 'price_desc': result.sort((a, b) => b.price - a.price); break;
            case 'popularity':
            default: result.sort((a, b) => b.enrolled - a.enrolled); break;
        }

        return result;
    }, [courses, searchTerm, filters, sortBy]);
    
    // Effect for pagination
    useEffect(() => {
        const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
        const paginatedCourses = filteredAndSortedCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
        setDisplayedCourses(paginatedCourses);
    }, [currentPage, filteredAndSortedCourses]);

    // Reset page to 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filters, sortBy]);

    // Handlers
    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFilters(prev => {
            if (type === 'checkbox') {
                 const list = prev[name] ? [...prev[name]] : [];
                 if (checked) {
                    list.push(value);
                 } else {
                    const index = list.indexOf(value);
                    if (index > -1) list.splice(index, 1);
                 }
                 return { ...prev, [name]: list };
            }
            return { ...prev, [name]: value };
        });
    };

    const totalPages = Math.ceil(filteredAndSortedCourses.length / COURSES_PER_PAGE);

    return (
        <div className="catalog-page">
            <header className="catalog-header">
                <Logo />
                <div className="search-bar-container">
                    <FaSearch className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search for courses, instructors..." 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>
            
            <div className="catalog-main-content">
                {/* --- Filter Sidebar --- */}
                <aside className={`filter-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-header">
                        <h3>Filters</h3>
                        <button onClick={() => setIsSidebarOpen(false)} className="close-sidebar-btn"><FaTimes /></button>
                    </div>
                    {/* Category */}
                    <h4>Category</h4>
                    {['Technology', 'Business', 'Data Science', 'Arts'].map(cat => (
                         <div key={cat}><input type="checkbox" name="category" value={cat} onChange={handleFilterChange} /> {cat}</div>
                    ))}
                    {/* Level */}
                    <h4>Level</h4>
                    {['Beginner', 'Intermediate', 'Advanced'].map(lvl => (
                         <div key={lvl}><input type="radio" name="level" value={lvl} onChange={handleFilterChange} checked={filters.level === lvl}/> {lvl}</div>
                    ))}
                    <button onClick={() => setFilters(f => ({ ...f, level: '' }))}>Clear Level</button>
                     {/* Price */}
                    <h4>Price</h4>
                    <div><input type="radio" name="price" value="all" onChange={handleFilterChange} checked={filters.price === 'all'} /> All</div>
                    <div><input type="radio" name="price" value="free" onChange={handleFilterChange} checked={filters.price === 'free'} /> Free</div>
                    <div><input type="radio" name="price" value="paid" onChange={handleFilterChange} checked={filters.price === 'paid'} /> Paid</div>
                    {/* Duration */}
                    <h4>Duration</h4>
                    <div><input type="checkbox" name="duration" value="short" onChange={handleFilterChange} /> Less than 5 hours</div>
                    <div><input type="checkbox" name="duration" value="medium" onChange={handleFilterChange} /> 5 - 20 hours</div>
                    <div><input type="checkbox" name="duration" value="long" onChange={handleFilterChange} /> 20+ hours</div>
                </aside>

                {/* --- Course Display Area --- */}
                <main className="course-display-area">
                    <div className="catalog-controls">
                        <div className="breadcrumbs-and-count">
                           <p className="breadcrumbs">Home &gt; Courses {filters.category.length ? `> ${filters.category[0]}` : ''}</p>
                           <p className="course-count">{filteredAndSortedCourses.length} courses found</p>
                        </div>
                        <div className="sort-and-view">
                            <button className="mobile-filter-btn" onClick={() => setIsSidebarOpen(true)}><FaFilter /> Filters</button>
                             <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-dropdown">
                                <option value="popularity">Sort by Popularity</option>
                                <option value="rating">Sort by Rating</option>
                                <option value="date">Sort by Newest</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                            </select>
                            <div className="view-toggle">
                                <button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'active' : ''}><FaTh /></button>
                                <button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'active' : ''}><FaThList /></button>
                            </div>
                        </div>
                    </div>

                    {/* Course Cards Grid/List */}
                    <div className={`course-list ${viewMode}`}>
                       {displayedCourses.length > 0 ? (
                           displayedCourses.map(course => <CourseCard key={course.id} course={course} viewMode={viewMode} />)
                       ) : (
                           <p className="no-courses-found">No courses match your criteria. Try adjusting your filters.</p>
                       )}
                    </div>
                    
                     {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="pagination-controls">
                            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>Prev</button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

// --- Child Component for a single course card ---
const CourseCard = ({ course, viewMode }) => (
    <div className={`course-card ${viewMode}`}>
        <img src={course.imageUrl} alt={course.title} className="course-image" />
        <div className="course-details">
            <span className="course-category">{course.category}</span>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-instructor">By {course.instructor}</p>
            <div className="course-meta">
                <span className="course-rating"><FaStar /> {course.rating}</span>
                <span className="course-level">{course.level}</span>
                <span className="course-duration">{course.durationHours} hours</span>
            </div>
            <div className="course-price-enroll">
                <span className="course-price">{course.price === 0 ? 'Free' : `$${course.price}`}</span>
                <button className="enroll-button">View Details</button>
            </div>
        </div>
    </div>
);


export default CourseCatalog;