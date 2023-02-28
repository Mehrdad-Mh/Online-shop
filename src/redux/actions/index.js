const change_loader = (bool) => ({ type: "LOADER", payload: bool });
const check_login = (check) => ({ type: "LOGIN", payload: check });
const user_role = (role) => ({ type: "ROLE", payload: role });
const get_tags = (tags) => ({ type: "TAGS", payload: tags });

export { change_loader, check_login, user_role, get_tags };