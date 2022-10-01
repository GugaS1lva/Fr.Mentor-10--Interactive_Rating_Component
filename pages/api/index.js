export const myAPI = [
    {
        "id": 1,
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "id": 2,
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "id": 3,
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "id": 4,
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "id": 5,
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "id": 6,
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

export const titles = myAPI.map(item => {
    return <p key={item.id}>{item.title}</p>
})

export const currentDaily = myAPI.map(item => {
    return <p key={item.id}>{item.timeframes.daily.current}</p>
})
export const previousDaily = myAPI.map(item => {
    return <p key={item.id}>{item.timeframes.daily.previous}</p>
})

export const currentWeekly = myAPI.map(item => {
    return <p key={item.id}>{item.timeframes.weekly.current}</p>
})
export const previousWeekly = myAPI.map(item => {
    return <p key={item.id}>{item.timeframes.weekly.previous}</p>
})

export const currentMonthly = myAPI.map(item => {
    return <p key={item.id}>{item.timeframes.monthly.current}</p>
})
export const previousMonthly = myAPI.map(item => {
    return <p key={item.id}>{item.timeframes.monthly.previous}</p>
})