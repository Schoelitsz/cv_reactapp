class Education {
    constructor(idEducation, title, school, gotDiploma, startDate, endDate, description, isCurrent, isEnabled){
        this.idEducation = idEducation,
        this.title = title;
        this.school = school;
        this.gotDiploma = gotDiploma,
        this.startDate = startDate,
        this.endDate = endDate,
        this.description = description,
        this.isCurrent = isCurrent,
        this.isEnabled = isEnabled
    }
}

module.exports = Education;