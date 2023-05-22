const NewUserContext = createContext();

const UserContext = ({ children }) => {
  return <NewUserContext.Provider>{children}</NewUserContext.Provider>;
};

export { UserContext, NewUserContext };
