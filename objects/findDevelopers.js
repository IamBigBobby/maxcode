// https://maxcode.dev/problems/find-developers/

function findDevelopers(teams) {
    const developers = [];

    for (team of teams) {
        for(member of team.members){
            if(member.role === 'developer') {
                developers.push(member.name);
            }
        }
    }

    return developers.sort();
}

const teams = [
    {
        name: "1",
        members: [
        { name: "Alice", role: "developer" },
        { name: "Bob", role: "designer" },
        ],
    },
    {
        name: "2",
        members: [
        { name: "Carol", role: "developer" },
        { name: "Dave", role: "qa" },
        ],
    },
];
  
console.log(findDevelopers(teams)); // ["Alice", "Carol"]
  