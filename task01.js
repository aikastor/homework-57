
const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'}
    ];

const frontendTime = tasks.reduce((hrs,item)=>(
    hrs += item.category === 'Frontend' ? item.timeSpent : 0
),0);

const bugTime = tasks.reduce((hrs, item) => (
    hrs += item.type === 'bug' ? item.timeSpent : 0
),0);

const UItasksNum = tasks.reduce((num, item) => (
    num += item.title.includes('UI') ? 1 : 0
),0);

const categories = tasks.reduce((acc, item)=> {
    acc[item.category] = acc[item.category] + 1 || 1;
    return acc;
}, {});

//The following code is just for the sake of using 'filter' and
// 'map', thus result can be achieved only using reduce method!

const fourHrsMore = tasks
    .filter(item => item.timeSpent > 4)
    .map(({title, category}) => ({title, category}));

console.log(`Time spent on frontend: ${frontendTime} \n
             Time spent on bugs:  ${bugTime} \n
             UI tasks: ${UItasksNum} \n
            `);

console.log(categories);
console.log('========================================');
console.log(fourHrsMore);