export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    hasPrev: boolean;
    hasNext: boolean;
}
