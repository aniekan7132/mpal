const Grid = ({children, grid, className, gap, style}) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${grid}, 1fr)`, gap: `${gap}`, ...style}} className={className+" custom-grid"}>
            {children}
        </div>
    );
}
 
export default Grid;