type sectionProps = {
    id: string
    title: string
    content: string
};

const Section = ({ id, title, content }: sectionProps) => {
    return (
        <section>
            <div className="section-center" id={id}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </section>
    );
};

export default Section;