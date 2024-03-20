import "@/src/components/LexiqueTerm/LexiqueTerm.css";

export default function LexiqueTerm({word,def,id}) {
    return(
        <div className="lexiqueTerm_container" id={id}>
            <div className="term_title"># {word}</div>
            <div className="term_def">{def}</div>
        </div>
    )
}