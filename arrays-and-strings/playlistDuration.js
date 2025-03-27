function playlistDuration(playlist) {
    const finalTime = playlist.reduce((acc, episode) => {
        [finalHours, finalMitutes, finalSeconds] = acc;
        const episodeTime = episode[1].split(':');
        [hour, minutes, seconds] = episodeTime;
        if (episodeTime.length > 2) {
            [hour, minutes, seconds] = episodeTime;
            finalHours += Number(hour);
            finalMitutes += Number(minutes);
            finalSeconds += Number(seconds);
        } else {
            [minutes, seconds] = episodeTime;
            finalMitutes += Number(minutes);
            finalSeconds += Number(seconds);
        }

        return acc = [finalHours, finalMitutes, finalSeconds];
    }, [0, 0, 0])

    const fixTime = (timePart) => {
        const restPartTime = (timePart % 60);
        const nextPartTime = (timePart - restPartTime) / 60;
        return {
            restPartTime,
            nextPartTime
        }
    }

    [finalHour, finalMinute, finalSecond] = finalTime;

    if(finalSecond >= 60){
        const newTime = fixTime(finalSecond);
        finalTime[2] = newTime.restPartTime;
        finalTime[1] = newTime.nextPartTime + finalMinute;
    }

    if (finalMinute >= 60) {
        const newTime = fixTime(finalMinute);
        finalTime[1] = newTime.restPartTime;
        finalTime[0] = newTime.nextPartTime + finalHour;
    }

    const returnHour = finalTime[0].toString().padStart(2, '0');
    const returnMinutes = finalTime[1].toString().padStart(2, '0');
    const returnSeconds = finalTime[2].toString().padStart(2, '0');

    return finalTime[0] === 0 ? `${returnMinutes}:${returnSeconds}` : `${returnHour}:${returnMinutes}:${returnSeconds}`;
}

const innuendo = [
    ["Innuendo", "6:31"],
    ["I'm Going Slightly Mad", "4:22"],
    ["Headlong", "4:38"],
    ["I Can't Live with You", "4:33"],
    ["Don't Try So Hard", "3:39"],
    ["Ride the Wild Wind", "4:42"],
    ["All God's People", "4:21"],
    ["These Are the Days of Our Lives", "4:15"],
    ["Delilah", "3:35"],
    ["The Hitman", "4:56"],
    ["Bijou", "3:36"],
    ["The Show Must Go On", "4:35"],
  ];
  
  console.log(playlistDuration(innuendo)); // "53:43"

  const blackMirrorSeason4 = [
    ["USS Callister", "01:16:00"],
    ["Arkangel", "52:00"],
    ["Crocodile", "59:00"],
    ["Hang the DJ", "51:00"],
    ["Metalhead", "41:00"],
    ["Black Museum", "01:09:00"],
  ];
  
  console.log(playlistDuration(blackMirrorSeason4)); // "05:48:00"
  