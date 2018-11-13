const kodemia = {
    rose: 'koder',
    memo: 'koder',
    charles: 'mentor',
    edwin: 'koder'
}

function students (){
    const {rose,memo,edwin}=kodemia;
    return{rose,memo,edwin};
}

const koders = students();

function teacher (){
    const {charles}=kodemia;
    return {charles};
}

const mentors = teacher();

console.log(koders);
console.log(mentors);