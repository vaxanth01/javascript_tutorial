sum = []

for(i=0;i<9;i++)
    {
        sum.push([])

        for(j=0;j<9;j++){
            sum[i].push(j)
        }
    }

    console.log(sum)
    console.table(sum)