const Button = ({ text, className, id }) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("heroEnd");
                if (target && id) {
                    const offset = window.innerHeight * 0.13;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }}
            className={`${className ?? ""} cta-wrapper`}
        >
            <div className="cta-button">
                <p className="cta-text">{text}</p>
                <img className="cta-arrow" src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </a>
    );
};

export default Button;