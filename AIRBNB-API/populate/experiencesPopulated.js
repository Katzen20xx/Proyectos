require('./../connection/connectionDb')
const ExperienceModel = require('./../models/experiencesModel')
const EXPERIENCES = require('./../repository/experiencesRepository')

const experiencesPopulate = () => {
    try {
        EXPERIENCES.map(async el => {
            await ExperienceModel(el).save()
        }) 
    } catch (err) {
        console.error('Error', err)
    }
}

experiencesPopulate()
