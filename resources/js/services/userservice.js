import axios from "axios";

const endpoint = "http://localhost:8000/api/users";
export async function getUsers() {
    const { data } = await axios.get(endpoint);
    const { users, success } = data;
    return success ? users : [];
}

export async function deleteUsers(id) {
    const { data } = await axios.delete(endpoint + "/" + id);
    const { success } = data;
    return success;
}

export async function addUsers(user) {
    return await axios
        .post(endpoint, user)
        .then(response => {
            return {
                success: response.data.success,
                backend_errors: false
            };
        })
        .catch(error => {
            if (error.response.status === 422) {
                return {
                    success: false,
                    backend_errors: error.response.data.errors
                };
            }
        });
}

export async function getUser(id) {
    const {
        data: { user }
    } = await axios.get(endpoint + "/" + id);
    return user;
}

export async function updateUsers(id, user) {
    return await axios
        .put(endpoint + "/" + id, user)
        .then(response => {
            return {
                success: response.data.success,
                backend_errors: false
            };
        })
        .catch(error => {
            if (error.response.status === 422) {
                return {
                    success: false,
                    backend_errors: error.response.data.errors
                };
            }
        });
}
