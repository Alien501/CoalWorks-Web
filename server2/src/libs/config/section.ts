import { NextFunction, Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { prisma } from "../../utils/prisma";
import { error } from "console";

const SectionItemSchema = z.object({
  itemId: z.number().int().optional(),
  typeId: z.number().int().optional(),
  itemName: z.string().max(255),
});

const SectionSchema = z.object({
  typeId: z.number().int().optional(),
  scaleLevel: z.number().int(),
  name: z.string().max(255),
  description: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  sectionItems: z.array(SectionItemSchema).optional(),
});

const insertSectionData: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const sectionData = z.array(SectionSchema).parse(req.body);
  const createdSections = await prisma.$transaction(async (tx) => {
    const sections = [];
    for (const sectionIp of sectionData) {
      const section = await tx.sectionType.create({
        data: {
          scaleLevel: sectionIp.scaleLevel,
          name: sectionIp.name,
          description: sectionIp.description,
        },
      });

      if (sectionIp.sectionItems && sectionIp.sectionItems.length > 0) {
        await tx.sectionItem.createMany({
          data: sectionIp.sectionItems.map((item) => ({
            typeId: section.typeId,
            itemName: item.itemName,
          })),
        });
      }

      sections.push(section);
    }

    return sections;
  });

  res.status(201).json({
    message: "Created section successfully!",
    data: createdSections,
    error: null,
  });
};

const NewSectionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  area: z.number().optional(),
  scaleLevel: z.number().int().min(1, "Scale level must be at least 1"),
  mineId: z.number().optional(),
  insiderToId: z.number().optional(),
  model: z.string().optional(),
});

const newSection: RequestHandler = async (req: Request, res: Response) => {
  console.log(req.body);
  const validatedData = NewSectionSchema.parse(req.body);

  const sectionType = await prisma.sectionType.findFirst({
    where: {
      scaleLevel: validatedData.scaleLevel,
    },
  });

  if (!sectionType) {
    res.status(400).json({
      message: "No matching section type found for the given scale level",
      error: true,
    });
  }
  let newSection = null;
  switch (validatedData.scaleLevel) {
    case 5:
      newSection = await prisma.largeSection.create({
        data: {
          name: validatedData.name,
          description: validatedData.description,
          area: validatedData.area,
          typeId: sectionType?.typeId,
          createdAt: new Date(),
          updatedAt: new Date(),
          ...(validatedData.mineId && { insiderToId: validatedData.mineId }),
        },
        select: {
          area: true,
          mine: true,
          sectionId: true,
          sectionType: true,
          name: true,
          typeId: true,
        },
      });
      break;
    case 4:
      console.log(validatedData);
      newSection = await prisma.mediumSection.create({
        data: {
          name: validatedData.name,
          description: validatedData.description,
          area: validatedData.area,
          typeId: sectionType?.typeId,
          createdAt: new Date(),
          updatedAt: new Date(),
          insiderToId: validatedData.insiderToId || undefined,
        },
      });
      break;
    case 3:
      newSection = await prisma.smallSection.create({
        data: {
          name: validatedData.name,
          description: validatedData.description,
          area: validatedData.area,
          typeId: sectionType?.typeId,
          createdAt: new Date(),
          updatedAt: new Date(),
          insiderToId: validatedData.insiderToId || undefined,
        },
      });
      break;
    case 2:
      newSection = await prisma.microSection.create({
        data: {
          name: validatedData.name,
          description: validatedData.description,
          area: validatedData.area,
          typeId: sectionType?.typeId,
          createdAt: new Date(),
          updatedAt: new Date(),
          insiderToId: validatedData.insiderToId || undefined,
        },
      });
      break;
    case 1:
      newSection = await prisma.unitSection.create({
        data: {
          name: validatedData.name,
          description: validatedData.description,
          model: validatedData.model,
          typeId: sectionType?.typeId,
          createdAt: new Date(),
          updatedAt: new Date(),
          insiderToId: validatedData.insiderToId || undefined,
        },
      });
      break;
    default:
      break;
  }

  res.status(201).json({
    message: "Section created successfully",
    data: newSection,
    error: null,
  });
};
// TODO: Merge both function to create a genereic one
// const NewSectioionSchema = z.object({
//     scaleLevel: z.number(),
//     name: z.string(),
//     description: z.string(),
//     area: z.number(),
// })

// const newSection: RequestHandler = async (req: Request, res: Response) => {
//     const validatedData = NewSectioionSchema.parse(NewSectioionSchema);

//     switch (validatedData.scaleLevel) {
//         case 4:

//             break;

//         default:
//             break;
//     }
// }

const GetSectionsSchema = z.object({
  scaleLevel: z
    .number()
    .gte(1, "Invalid section type")
    .lte(5, "Invalid section type"),
});

const getSections: RequestHandler = async (req: Request, res: Response) => {
  const scaleLevel = Number(req.params.scaleLevel);

  const validatedData = GetSectionsSchema.parse({ scaleLevel });

  let data: any[] = [];

  switch (validatedData.scaleLevel) {
    case 5:
      const largeSections = await prisma.largeSection.findMany({
        select: {
          sectionId: true,
          name: true,
          description: true,
          area: true,
          mine: true,
          typeId: true,
          sectionType: {
            select: {
              typeId: true,
            },
          },
        },
      });

      const sectionItems = await prisma.sectionItem.findMany({
        select: {
          itemId: true,
          itemName: true,
        },
      });

      const typeNameMap: { [key: number]: string } = sectionItems.reduce(
        (acc: any, item) => {
          acc[item.itemId] = item.itemName;
          return acc;
        },
        {}
      );

      const transformedSections = largeSections.map((section: any) => ({
        ...section,
        typeName: typeNameMap[section.typeId] || null,
      }));

      data = transformedSections;
      break;

    case 4:
        const outerSection = await prisma.largeSection.findMany({
            select: {
                sectionId: true,
                name: true,
            },
        });
        
        const largeNameMap = outerSection.reduce((acc: any, section: any) => {
            acc[section.sectionId] = section.name;
            return acc;
        }, {});
        
        const sectionTypes = await prisma.sectionType.findMany({
            select: {
                typeId: true,
                name: true,
            },
        });
        
        const typeNameMap2 = sectionTypes.reduce((acc: any, type: any) => {
            acc[type.typeId] = type.name;
            return acc;
        }, {});
        
        const mediumSections = await prisma.mediumSection.findMany({
            select: {
                name: true,
                sectionId: true,
                description: true,
                area: true,
                typeId: true,
                insiderToId: true,
            },
        });
        
        const transformedMediumSections = mediumSections.map((section: any) => ({
            ...section,
            largeSectionName: largeNameMap[section.insiderToId] || null,
            typeName: typeNameMap2[section.typeId] || null,
        }));
        
        console.log("Transformed medium sections:", transformedMediumSections);
        
        data = transformedMediumSections;
        console.log(data);
        
      break;
    case 3:
      const smallSections = await prisma.smallSection.findMany({
        select: {
          name: true,
          sectionId: true,
          description: true,
          area: true,
          typeId: true,
          insiderToId: true,
        },
      });
      data = smallSections;
      break;
    case 2:
      const microSections = await prisma.microSection.findMany({
        select: {
          name: true,
          sectionId: true,
          description: true,
          area: true,
          typeId: true,
          insiderToId: true,
        },
      });
      data = microSections;
      break;
    case 1:
      const unitSections = await prisma.unitSection.findMany({
        select: {
          name: true,
          unitId: true,
          description: true,
          model: true,
          typeId: true,
          insiderToId: true,
        },
      });
      data = unitSections;
      break;
    default:
      res.status(404).json({
        message: "Wrong section!",
        error: "Invalid mine type",
        data: null,
      });
      return;
  }

  res.status(200).json({
    message: "Fetched data successfully!",
    data: data,
    error: null,
  });
};

const getAllSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sections = await prisma.sectionType.findMany();
  return res.status(200).json(sections);
};

const getAllSectionTypes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const scaleLevel: number = Number(req.query.scaleLevel);
  const sectionTypes = await prisma.sectionType.findFirst({
    where: {
      scaleLevel: scaleLevel,
    },
    select: {
      typeId: true,
    },
  });

  const sectionItems = await prisma.sectionItem.findMany({
    where: {
      typeId: sectionTypes?.typeId,
    },
  });

  return res.json(sectionItems);
};

const getAllLargeSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const largeSections = await prisma.largeSection.findMany();
  return res.status(200).json(largeSections);
};

const getAllMediumSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mediumSections = await prisma.mediumSection.findMany();
  return res.status(200).json(mediumSections);
};

const getAllSmallSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const smallSections = await prisma.smallSection.findMany();
  return res.status(200).json(smallSections);
};

const getAllMicroSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const microSection = await prisma.microSection.findMany();
  return res.status(200).json(microSection);
};

const getAllUnitSections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const unitSection = await prisma.unitSection.findMany();
  return res.status(200).json(unitSection);
};

export {
  insertSectionData,
  newSection,
  getSections,
  getAllSections,
  getAllSectionTypes,
  getAllLargeSections,
  getAllMediumSections,
  getAllSmallSections,
  getAllMicroSections,
  getAllUnitSections,
};
