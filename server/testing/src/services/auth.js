import bcrypt from 'bcrypt'; // Using bcrypt for password hashing

const saltRounds = 10; // Adjust based on security requirements

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};
