export const genOTP = (): string => {
    let otp = "EC-";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < 6; i++) {
        otp += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return otp;
};