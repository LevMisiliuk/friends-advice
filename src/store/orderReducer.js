const defaultState = {
    template: {},
    factory: {},
    laminationInside: {},
    laminationOutside: {},
    glazing: {},
    bead: {},
    hardware: {},
    reinforcment: {},
    addElements: {},
    sealant: {},
    mainInfo: {},
}

const CHOOSE_TEMPLATE = "CHOOSE_TEMPLATE";
const CHOOSE_FACTORY = "CHOOSE_FACTORY";
const CHOOSE_LAMINATION_INSIDE = "CHOOSE_LAMINATION_INSIDE";
const CHOOSE_LAMINATION_OUTSIDE = "CHOOSE_LAMINATION_OUTSIDE";
const CHOOSE_GLAZING = "CHOOSE_GLAZING";
const CHOOSE_BEAD = "CHOOSE_BEAD";
const CHOOSE_HARDWARE = "CHOOSE_HARDWARE"
const CHOOSE_REINFORCMENT = "CHOOSE_REINFORCMENT";
const CHOOSE_SEALANT = "CHOOSE_SEALANT";
const MAIN_INFO = "MAIN_INFO"

export const orderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case MAIN_INFO:
            return {...state, mainInfo: action.payload}
        case CHOOSE_TEMPLATE:
            return {...state, template: action.payload}
        case CHOOSE_FACTORY:
            return {...state, factory: action.payload}
        case CHOOSE_LAMINATION_INSIDE:
            return {...state, laminationInside: action.payload}
        case CHOOSE_LAMINATION_OUTSIDE:
            return {...state, laminationOutside: action.payload}
        case CHOOSE_GLAZING:
            return {...state, glazing: action.payload}
        case CHOOSE_BEAD:
            return {...state, bead: action.payload}
        case CHOOSE_HARDWARE:
            return {...state, hardware: action.payload}
        case CHOOSE_REINFORCMENT:
            return {...state, reinforcment: action.payload}
        case CHOOSE_SEALANT: 
            return {...state, sealant: action.payload}
        default:
            return state
    }
}

export const chooseTemplateAction = (payload) => ({type: CHOOSE_TEMPLATE, payload})
export const mainInfoAction = (payload) => ({type: MAIN_INFO, payload})
export const chooseFactoryAction = (payload) => ({type: CHOOSE_FACTORY, payload})
export const chooseLaminationInsideAction = (payload) => ({type: CHOOSE_LAMINATION_INSIDE, payload})
export const chooseLaminationOutsideAction = (payload) => ({type: CHOOSE_LAMINATION_OUTSIDE, payload})
export const chooseGlazingAction = (payload) => ({type: CHOOSE_GLAZING, payload})
export const chooseBeadAction = (payload) => ({type: CHOOSE_BEAD, payload})
export const chooseHardwareAction = (payload) => ({type: CHOOSE_HARDWARE, payload})
export const chooseReinforcmentAction = (payload) => ({type: CHOOSE_REINFORCMENT, payload})
export const chooseSealantAction = (payload) => ({type: CHOOSE_SEALANT, payload})
