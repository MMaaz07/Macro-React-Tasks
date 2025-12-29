import ReactDOM from "react-dom";

export function NotificationModal({close}){
    return ReactDOM.createPortal(
        <div>
            <h3>This is a Notification</h3>
            <button type="button" onClick={close} >Close</button>
        </div>, document.getElementById("modal-root"))
};