function timeConversion(s) {
    // Write your code here
    let timePM = s.split('PM')[0];
    let timeAM = s.split('AM')[0];
    
    const formatedTime = (index, amOrPm) => {
        return (amOrPm === 'PM' ? timePM : timeAM).split(':')[index]
    }
    
    if (s.includes('PM')) {
        if (formatedTime(0) == 12) {
            return `${Number(formatedTime(0, 'PM'))}:${formatedTime(1, 'PM')}:${formatedTime(2, 'PM')}`;
        }
        return `${Number(formatedTime(0, 'PM')) + 12}:${formatedTime(1, 'PM')}:${formatedTime(2, 'PM')}`;
    }
    if (s.includes('AM')) {
        if (formatedTime(0) == 12) {
            return `${Number(formatedTime(0, 'AM')) - 12}0:${formatedTime(1, 'AM')}:${formatedTime(2, 'AM')}`;
        }
        return s.split('AM')[0];
    }
}