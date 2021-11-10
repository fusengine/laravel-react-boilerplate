export const setFormData = (form, setForm, target) => (e) => {
    return setForm({ ...form, [target]: e.target.value });
};
