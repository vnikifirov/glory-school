import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  students: {
    items: [],
    item: {},
    stage: "ELEMENTARY",
    division: "PRACTICAL_SCIENCE",
    hasDivision: {
      ELEMENTARY: false,
      MIDDLE_SCHOOL: false,
      HIGH_SCHOOL: true,
      COLLEGE: false
    },
    stages: [
      ["ELEMENTARY", "Elementary"],
      ["MIDDLE_SCHOOL", "Middle school"],
      ["HIGH_SCHOOL", "High school"],
      ["COLLEGE", "College"]
    ],
    divisions: [
      ["PRACTICAL_SCIENCE", "Practical science"],
      ["FOREIGN_LANGUAGES", "Foreign languages"],
      ["MANAGEMENT_AND_ECONOMY", "Management and economy"],
      ["LITERATURE_AND_PHILOSOPHY", "Literature and philosophy"]
    ],
    ELEMENTARY: [
      ["FRENCH", "French"],
      ["ARABIC", "Arabic"],
      ["MATHEMATICS", "Mathematics"]
    ],
    MIDDLE_SCHOOL: [
      ["FRENCH", "French"],
      ["ENGLISH", "English"],
      ["MATHEMATICS", "Mathematics"],
      ["PHYSICS", "Physics"],
      ["SCIENCE", "Science"]
    ],
    HIGH_SCHOOL: {
      PRACTICAL_SCIENCE: [
        ["MATHEMATICS", "Mathematics"],
        ["PHYSICS", "Physics"],
        ["SCIENCE", "Science"]
      ],
      FOREIGN_LANGUAGES: [
        ["MATHEMATICS", "Mathematics"],
        ["ENGLISH", "English"],
        ["FRENCH", "French"],
        ["ITALIAN", "Italian"],
        ["SPANISH", "Spanish"],
        ["GERMAN", "German"]
      ],
      MANAGEMENT_AND_ECONOMY: [
        ["MATHEMATICS", "Mathematics"],
        ["MANAGEMENT_AND_ACCOUNTING", "Management and accounting"]
      ],
      LITERATURE_AND_PHILOSOPHY: [
        ["MATHEMATICS", "Mathematics"],
        ["ARABIC", "Arabic"],
        ["PHILOSOPHY", "Philosophy"]
      ]
    },
    COLLEGE: [["FRENCH", "French"], ["ENGLISH", "English"]]
  },
  tab: {}
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)
    // install devtools before you add this line
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
