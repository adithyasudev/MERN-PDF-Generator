// authmiddleware.js
export const authmiddleware = async (req, res, next) => {
    try {
        // Your authentication logic here
        // For example, check if the user is authenticated
        const isAuthenticated = true; // Replace with actual authentication logic
        if (!isAuthenticated) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        next();
    } catch (error) {
        console.error("Authentication error", error);
        res.status(500).json({ message: "Authentication error" });
    }
};
