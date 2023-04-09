export const setInvalidCredentials = (isInvalid) => {
    const invalidCredentials = document.querySelector(".noCars");
    if (isInvalid) {
        invalidCredentials.style.display = "block";
    } else {
        invalidCredentials.style.display = "none";
    }
};