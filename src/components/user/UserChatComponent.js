import "../../chat.css"

function UserChatComponent() {
  return (
    <div className="chat-bot">
        <input type="checkbox" id="check" />
        <label className="chat-btn" htmlFor="check">
        <i className="bi bi-robot comment"></i>
            <span className="position-absolute top-0 start-10
            translate-middle p-2 bg-danger border-light rounded-circle"></span>
        <i className="bi bi-x-circle close"></i>
        </label>
        <div className="chat-wrapper">
            <div className="chat-header" style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <h6>aide chate</h6>
            </div>
            <div className="chat-from">
                <div className="chat-msg">
                {Array.from({ length: 20}).map((_, id) => (
                    <div> 
                    <p>chat test</p>
                    <p>
                        <b>vous:</b>j'ai besoin d'aide
                    </p>
                    <p className="bg-primary p-3 ms-4 text-light">
                        <b>supoort :</b> quel est votre demande
                    </p>
                    </div>
                ))}
                   
                </div>
                <textarea 
                    id="clientChatMsg"
                    className="form-control"
                    placeholder="quel votre demande">
                    </textarea>

                    <button className="btn btn-sucess btn-block" style={{backgroundColor: "##FFC170", margin: "10px 180px"}}>
                        demander
                    </button>
            </div>
        </div> 
        </div>
  )
}

export default UserChatComponent
