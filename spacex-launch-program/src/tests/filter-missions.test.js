const returnListOfYears = () => {
    let endYear = new Date().getFullYear();
    let startYear = 2006;
    let list = [];
    for (let i = startYear; i <= endYear; i++) {
        list.push(i)
    }
    return list;
}

test('Checks if all launch years are present', () => {
    expect(returnListOfYears()).toStrictEqual([2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]);
});