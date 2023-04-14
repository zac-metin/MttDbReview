const Section = ({children, id}) => 
    (<div className={`Section ${id}`}>
        {children}
    </div>)

export default Section;