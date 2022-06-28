import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema(
  {
    filled: {
      type: Boolean,
      default: false
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    founders: {
      type: Array,
      fullName: String,

      age: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
    },

    //Product Information

    describePrimaryProductService: {
      type: String,
      required: true,
    },

    uniqueProductService: {
      type: String,
      required: true,
    },

    healthRelated: {
      type: String,
    },

    yesMoreDescription: {
      type: String,
    },

    targetMarketCustomer: {
      type: String,
    },

    competitors: {
      type: String,
    },

    productLargeScale: {
      type: String,
    },

    startupFinance: {
      type: String,
      required: true,
    },

    productAmountRevenue: {
      type: String,
      required: true,
    },

    //Product Stage

    statusOfProduct: {
      type: String,
      required: true,
    },

    productRegisteredBusiness: {
      type: String,
      required: true,
    },

    establishmentDate: {
      type: String,
      required: true,
    },

    websiteForStartup: {
      type: String,
    },

    applicationForStartup: {
      type: String,
    },

    onlineMarketing: {
      type: String,
    },

    socialMedia: {
      type: String,
    },

    socialMediaPresence: {
      type: String,
    },

    futurePlanOfExpanding: {
      type: String,
      required: true,
    },

    //Additional Information

    accesibleToDisabledPeople: {
      type: String,
    },

    trackingCustomerBase: {
      type: String,
    },

    exitStrategy: {
      type: String,
    },

    otherUniqueFeatures: {
      type: String,
    },

    planToGrow: {
      type: String,
    },

    planToCreateBrand: {
      type: String,
    },

    //Information about team

    previouslyParticipated: {
      type: String,
      required: true,
    },

    numberOfCofounders: {
      type: String,
      required: true,
    },

    expertiseInSRH: {
      type: String,
    },

    equityShare: {
      type: String,
      required: true,
    },

    otherOccupation: {
      type: String,
      required: true,
    },

    timeCommitment: {
      type: String,
      required: true,
    },

    willingnesssToRelocate: {
      type: String,
      required: true,
    },

    //Required Documents

    motivationVideoUrl: {
      type: String,
    },

    linkToApplication: {
      type: String,
    },

    pitchDeckUrl: {
      type: String,
    },

    businessCanvasUrl: {
      type: String,
    },

    organizationalStructureUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ApplicationModel = mongoose.model('Application', applicationSchema);

export default ApplicationModel;
