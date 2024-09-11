function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    let difference = income - expenses;
    let tax = difference * 0.20; 
    return tax; 
}

function sendNotification(email) {
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || email.indexOf('@', atIndex + 1) !== -1) {
        return "Invalid Email";
    }
    const [username, domain] = email.split('@');
    return `${username} sent you an email from ${domain}`;
}

function checkDigitsInName(name) {
    
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let char of name) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null ||
        !('name' in obj) || !('testScore' in obj) ||
        !('schoolGrade' in obj) || !('isFFamily' in obj)) {
        return "Invalid Input";
    }
    const { testScore, schoolGrade, isFFamily } = obj;

    if (typeof testScore !== 'number' || typeof schoolGrade !== 'number' ||
        testScore < 0 || testScore > 50 ||
        schoolGrade < 0 || schoolGrade > 30 ||
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    
    const farmerBonus = isFFamily ? 20 : 0;
    const finalScore = testScore + schoolGrade + farmerBonus;
    return finalScore >= 80;
}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    const numberOfCompletedInterviews = waitingTimes.length;
    const totalWaitingTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    const averageWaitingTime = totalWaitingTime / numberOfCompletedInterviews;
    const roundedAverageWaitingTime = Math.round(averageWaitingTime);
    
    const candidatesAhead = serialNumber - 1;
    const remainingCandidates = Math.max(candidatesAhead - numberOfCompletedInterviews, 0);
    const totalWaitingTimeForRemaining = remainingCandidates * roundedAverageWaitingTime;

    return totalWaitingTimeForRemaining;
}
