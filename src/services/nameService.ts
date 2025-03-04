export class NameService {
  static splitName(fullName: string) {
    const parts = fullName.trim().split(" ");
    if (parts.length < 2) {
      throw new Error("Please provide both first and last names.");
    }
    return {
      firstName: parts[0],
      lastName: parts.slice(1).join(" ") // Handles multi-word last names
    };
  }

  static combineName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`.trim();
  }
}
