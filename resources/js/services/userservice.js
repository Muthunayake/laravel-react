import axios from "axios";

export async function getUsers() {
    const { data } = await axios.get("http://localhost:8000/api/users");
    const { users, success } = data;
    return success ? users : [];
}

export async function deleteUsers(id) {
    const { data } = await axios.delete(
        "http://localhost:8000/api/users/" + id
    );
    const { success } = data;
    return success;
}

export async function addUsers(user) {
    return await axios
        .post("http://localhost:8000/api/users", user)
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
    } = await axios.get("http://localhost:8000/api/users/" + id);
    return user;
}

export async function updateUsers(id, user) {
    return await axios
        .put("http://localhost:8000/api/users/" + id, user)
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
