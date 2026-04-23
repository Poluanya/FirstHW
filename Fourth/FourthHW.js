const testResults = [
    { id: 1, name: 'Login Test', status: 'passed', time: 120 },
    { id: 2, name: 'Payment Test', status: 'failed', time: 300 },
    { id: 3, name: 'Profile Test', status: 'passed', time: 90 },
    { id: 4, name: 'Cart Test', status: 'skipped', time: 10 }
];


const failedTests = testResults.filter(test => test.status === 'failed');
const passedTestIds = testResults.filter(test => test.status === 'passed').map(test => test.id);
const totalExecutionTime = testResults.reduce((acc, test) => {
    return acc + test.time;
}, 0);

console.log('Провалившиеся тесты:', failedTests); 
console.log('Id успешных тестов: ', passedTestIds);
console.log(`Время выполнения всех тестов: ${totalExecutionTime}`);


const apiResponse = {
    statusCode: 200,
    data: {
        user: {
            username: "qa_ninja",
            role: "admin",
            contacts: {
                email: "admin@test.com",
                phone: "+123456789"
            }
        }
    }
};

const { data: { user: { username, role, contacts: { email } } } } = apiResponse;
console.log(username, role, email);



const defaultSettings = { headless: true, timeout: 30000, retries: 1 };
const specificTestOverrides = { timeout: 60000, viewport: { width: 1920, height: 1080 } };

const finalConfig = {...defaultSettings, ...specificTestOverrides};
console.log(finalConfig);


const logLocators = (...locators) => {
console.log(`Готовы к работе: ${locators.length} локаторов. Список: ${locators}`);
};
logLocators('.btn-login', '#password', '[name="submit"]');

const bugReport = { id: 104, title: 'Button crash', severity: 'High', status: 'Open' };
const { id, ...bugDetails } = bugReport;
console.log(id);
console.log(bugDetails);
