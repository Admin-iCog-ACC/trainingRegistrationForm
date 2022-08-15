export const modifyObj = (userData) => {
  let newObj = {};
  for (let key in userData) {
    if (!Array.isArray(userData[key])) {
      newObj[key] = userData[key].value;
    } else {
      newObj[key] = userData[key];
    }
  }
  return newObj;
};

export const convertData = (data) => {
  const { filled, founders, ...userData } = data;
  let applicationData = {};
  for (let key in userData) {
    switch (key) {
      case 'email':
      case 'phoneNumber':
      case 'describePrimaryProductService':
      case 'uniqueProductService':
      case 'startupFinance':
      case 'productAmountRevenue':
      case 'statusOfProduct':
      case 'productRegisteredBusiness':
      case 'establishmentDate':
      case 'futurePlanOfExpanding':
      case 'previouslyParticipated':
      case 'numberOfCofounders':
      case 'equityShare':
      case 'otherOccupation':
      case 'pitchDeckUrl':
      case 'organizationalStructureUrl':
      case 'timeCommitment':
      case 'businessCanvasUrl':
      case 'accesibleToDisabledPeople':
      case 'otherUniqueFeatures':
      case 'planToGrow':
      case 'willingnesssToRelocate':
      case 'motivationVideoUrl':  
        applicationData[key] = { value: userData[key], required: true };
        break;
      case 'healthRelated':
      case 'yesMoreDescription':
      case 'targetMarketCustomer':
      case 'competitors':
      case 'productLargeScale':
      case 'websiteForStartup':
      case 'applicationForStartup':
      case 'onlineMarketing':
      case 'socialMedia':
      case 'socialMediaPresence':
      case 'exitStrategy':
      case 'planToCreateBrand':
      case 'expertiseInSRH':
      case 'linkToApplication':
        applicationData[key] = { value: userData[key], required: false };
        break;
      default:
        break;
    }
  }

  applicationData = { ...applicationData, founders };
  console.log(applicationData);
  return applicationData;
};
