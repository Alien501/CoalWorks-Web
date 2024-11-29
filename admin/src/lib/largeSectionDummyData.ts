export const largeSectionDummyData = [
  {
    sectionId: 1,
    name: "Main Processing Area",
    description: "This section is used for the primary processing activities.",
    area: 1500.5,
    mine: "mine 1",
    type: "type 1"
  },
  {
    sectionId: 2,
    name: "Storage Area",
    description: "This section is used for storing raw materials.",
    area: 800.75,
    mine: "mine 1",
    type: "type 1"
  },
  {
    sectionId: 3,
    name: "Administration Office",
    description: "This section houses administrative activities.",
    area: 500.0,
    mine: "mine 1",
    type: "type 1"
  },
];

export const mediumSectionData = [
  {
    sectionId: 101,
    name: "Sub Processing Unit",
    description: "This section handles intermediate processing tasks.",
    area: 750.25,
    largeSection: {
      sectionId: 1,
      name: "Main Processing Area",
      description:
        "This section is used for the primary processing activities.",
      area: 1500.5,
    },
    sectionType: {
      typeId: 3,
      typeName: "Intermediate Processing",
    },
  },
  {
    sectionId: 102,
    name: "Packaging Area",
    description:
      "This section is dedicated to packaging the processed materials.",
    area: 500.75,
    largeSection: {
      sectionId: 2,
      name: "Secondary Processing Area",
      description: "This section handles secondary processing tasks.",
      area: 1200.0,
    },
    sectionType: {
      typeId: 4,
      typeName: "Packaging",
    },
  },
  {
    sectionId: 103,
    name: "Quality Control Unit",
    description: "This section ensures quality standards are met.",
    area: 300.0,
    largeSection: {
      sectionId: 3,
      name: "Inspection Area",
      description: "This section is used for inspection and quality checks.",
      area: 800.0,
    },
    sectionType: {
      typeId: 5,
      typeName: "Quality Control",
    },
  },
];
