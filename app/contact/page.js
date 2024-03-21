import "./style.css"

export default function Contact() {
    return(
        <main>
            <section>
                <h1>Contact</h1>
                <div className="flex_container">
                    <div>
                        <h2 className="mobile form_title">Formulaire de contact</h2>
                        <form>
                            <div>
                                <label>Nom</label>
                                <input placeholder="Votre nom de famille"/>
                            </div>
                            <div>
                                <label>Prénom</label>
                                <input placeholder="Votre prénom"/>
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input placeholder="Votre adresse mail"/>
                            </div>
                            <div>
                                <label>Sujet</label>
                                <input placeholder="Le sujet de votre message"/>
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea/>
                            </div>
                            <div className="buttonContainer">
                                <div className="sendMsg_btn">Envoyer</div>
                            </div>
                        </form>
                    </div>    
                    <div>
                        <div className="info_bloc">
                            <div className="info_title">Tèl</div>
                            <div>07 81 90 65 74</div>
                        </div>
                        <div className="info_bloc">
                            <div className="info_title">E-mail</div>
                            <div>fofana_bintou@outlook.fr</div>
                        </div>
                    
                    </div>    
                </div>    
            </section>
        </main>
    )
}