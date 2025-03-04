import { schema } from "./schema"; // ✅ Keep schema separate
import { NameService } from "../services/nameService";

const resolvers = {
  Query: {
    splitName: (_: any, { fullName }: { fullName: string }) => NameService.splitName(fullName),
    combineName: (_: any, { firstName, lastName }: { firstName: string; lastName: string }) =>
      NameService.combineName(firstName, lastName),
  },
};

export default { schema, resolvers };
