/**
 * Simple LocalStorage "Database" for AutoCut Helmet
 */

const DB_KEY = 'autocut_users';
const SESSION_KEY = 'autocut_session';

export const authDB = {
    // Get all users
    getUsers: () => {
        const users = localStorage.getItem(DB_KEY);
        return users ? JSON.parse(users) : [];
    },

    // Register a new user
    register: (userData) => {
        const users = authDB.getUsers();
        if (users.find(u => u.email === userData.email)) {
            throw new Error('User already exists');
        }

        const newUser = { ...userData, id: Date.now().toString() }; // Simple ID
        users.push(newUser);
        localStorage.setItem(DB_KEY, JSON.stringify(users));
        return newUser;
    },

    // Login user
    login: (email, password) => {
        const users = authDB.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        return user;
    },

    // Save session (Remember Me)
    setSession: (user) => {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    },

    // Get active session
    getSession: () => {
        const session = localStorage.getItem(SESSION_KEY);
        return session ? JSON.parse(session) : null;
    },

    // Clear session
    logout: () => {
        localStorage.removeItem(SESSION_KEY);
    }
};
