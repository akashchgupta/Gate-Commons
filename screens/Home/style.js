import { Dimensions } from "react-native";

export default {
  homeContainer: {
    flex: 1,
    marginTop: 40
  },
  homeMainContent: {
    flex: 1,
    padding: 20,
    paddingBottom: 0
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  searchInput: {
    borderRadius: 5,
    height: 50,
    paddingLeft: 15,
    fontSize: 16,
    color: "black"
  },
  subjectsContainer: {
    // backgroundColor: "grey"
  },
  subjectCard: {
    justifyContent: "center",
    alignItems: "flex-start",
    height: 100,
    backgroundColor: "#f1f2f6",
    marginTop: 20,
    borderRadius: 7,
    paddingHorizontal: 40
  },
  subjectName: {
    fontSize: 20
  },
  bottomTabContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#f1f2f6"
  },
  bottomTab: {
    height: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
};
