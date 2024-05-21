
import axios from "axios";
import { _API_URL } from "../../config";

class ContactFormAction {
    async sendMessageFromContactPage(lastName, firstName, email, message, tel) {
        try {
            const response = await axios.post(`${_API_URL}/feedback`, {lastName, firstName, email, message, tel});

            if(response.status === 200) {
                console.log("alert")
            }
        } catch(e) {
            console.log(e)
        }
    }
}

export default new ContactFormAction