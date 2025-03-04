import { schema } from "./schema"; // ✅ Keep schema separate
import { NameService } from "../services/nameService";

const resolvers = {
  Query: {
    splitName: (_: any, { fullName }: { fullName: string }) => NameService.splitName(fullName),
    combineName: (_: any, { firstName, lastName }: { firstName: string; lastName: string }) =>
      NameService.combineName(firstName, lastName),
    countCharacters: (_:any, { input }: { input: string }) => {
      return input.length;
    },

    splitNameLengths: (_: any, { fullName }: {fullName: string}) => {
      const { firstName, lastName } = NameService.splitName(fullName);
      return {
        firstNameLength: firstName.length,
        lastNameLength: lastName.length
      };
    }
  },
};

export default { schema, resolvers };
