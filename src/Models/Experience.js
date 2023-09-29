class Experience {
    constructor(idExperience, jobTitle, company, startDate, endDate, description, referenceInfo, isCurrent, isEnabled) {
        this.idExperience = idExperience,
        this.jobTitle = jobTitle,
        this.company = company,
        this.startDate = startDate,
        this.endDate = endDate,
        this.description = description,
        this.referenceInfo = referenceInfo,
        this.isCurrent = isCurrent,
        this.isEnabled = isEnabled
    }
}

module.exports = Experience;