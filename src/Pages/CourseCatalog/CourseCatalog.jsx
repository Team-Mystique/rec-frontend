import React, { useState, useEffect, useMemo } from 'react';
import './CourseCatalog.css';
import { FaTh, FaThList, FaSearch, FaStar, FaFilter } from 'react-icons/fa';
import { MockCourse } from './MockCourse/MockCourse';
import FilterSidebar from './FilterSidebar/FilterSidebar';

// --- Helper Hook for Debouncing (to improve search performance) ---
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        
        // Cleanup the timeout if value changes before delay is over
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

// --- Child Component for displaying a single course ---
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

// --- Main Catalog Component ---

const COURSES_PER_PAGE = 9;

const CourseCatalog = () => {
    // --- State Management ---
    const [courses, setCourses] = useState([]);
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popularity');
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        category: [],
        level: '',
        price: 'all',
        duration: [],
    });

    const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce delay

    // --- Data Fetching & Processing ---

    useEffect(() => {
        setCourses(MockCourse);
    }, []);

    const filteredAndSortedCourses = useMemo(() => {
        let result = [...courses];

        // Filtering Logic
        if (debouncedSearchTerm) {
            result = result.filter(course =>
                course.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
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
        
        // Sorting Logic
        switch (sortBy) {
            case 'rating': result.sort((a, b) => b.rating - a.rating); break;
            case 'date': result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
            case 'price_asc': result.sort((a, b) => a.price - a.price); break;
            case 'price_desc': result.sort((a, b) => b.price - a.price); break;
            case 'popularity':
            default: result.sort((a, b) => b.enrolled - a.enrolled); break;
        }

        return result;
    }, [courses, debouncedSearchTerm, filters, sortBy]);

    const displayedCourses = useMemo(() => {
        const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
        return filteredAndSortedCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
    }, [currentPage, filteredAndSortedCourses]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearchTerm, filters, sortBy]);

    // --- Handlers ---
    
    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilters(prev => {
            if (name === 'category' || name === 'duration') {
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

    // --- JSX Rendering ---
    return (
        <div className="catalog-page">
            
            <div className="catalog-hero">
                <img src="Logo.png" alt="Rise Edu Consult Banner" className="hero-banner-image" />
                
                <div className="hero-search-container">
                    <FaSearch className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search for courses..." 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="catalog-main-content">
                <FilterSidebar 
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearLevel={() => setFilters(f => ({ ...f, level: '' }))}
                />

                <main className="course-display-area">
                    <div className="catalog-controls">
                        <div className="breadcrumbs-and-count">
                           <p className="breadcrumbs">Home &gt; Courses</p>
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

                    <div className={`course-list ${viewMode}`}>
                       {displayedCourses.length > 0 ? (
                           displayedCourses.map(course => <CourseCard key={course.id} course={course} viewMode={viewMode} />)
                       ) : (
                           <p className="no-courses-found">No courses match your criteria. Try adjusting your filters.</p>
                       )}
                    </div>
                    
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

export default CourseCatalog;