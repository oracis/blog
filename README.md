{
    name: "page",
    attributes: {},
    children: [
        {
            name: "Banner",
            attributes: { 
                title: "",
                description: "",
                showSmallPic: "",
                smallPicUrl: "",
                backgroundUrl: "",
                backgroundHeight: ""
            },
            children: []
        },
        {
            name: "List",
            attributes: {},
            children: [
                {
                    name: "Item",
                    attributes: {
                        title: "",
                        description: "",
                        imageUrl: "",
                        link: ""
                    },
                    children: []
                }
            ]
        },
        {
            name: "Footer",
            attributes: {
                copyright: "",
                record: ""
            },
            children: [
                {
                    name: "Item",
                    attributes: {
                        title: "",
                        link: ""
                    },
                    children: []
                }
            ]
        }
    ]
}
