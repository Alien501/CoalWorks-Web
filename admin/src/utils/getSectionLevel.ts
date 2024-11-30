const getSectionLevel = (sectionType: string) => {
    const sectionData = {
        'large': 5,
        'medium': 4,
        'small': 3,
        'micro': 2,
        'unit': 1
    }

    return sectionData[sectionType];
}

export {
    getSectionLevel
}