var _ = require('lodash');
const dummy=(blogs)=>{
return 1
}
const totalLikes=(bloges)=>{
    const array=bloges.map(b=>b.likes)
    const reducer = (sum, item) => {
        return sum + item
      }
      return array.reduce(reducer,0)
}

const mostBlogs=(blogs)=>{
    var obj = _.countBy(blogs, function (rec) {
 
        return rec.author
 
    });
    refobj={
        author:"none",
        blogs:0
    }
    const authors=Object.keys(obj)
    let max=0
    for (let i=0;i<authors.length;i++)
    {
        if(max<obj[authors[i]])
        {
            max=obj[authors[i]]
            refobj.author=authors[i]
            refobj.blogs=max
        }
    }
    return refobj
}

const mostLikes=(blogs)=>{
    var obj = _.countBy(blogs, function (rec) {
 
        return rec.author
 
    });
    refobj={
        author:"none",
        likes:0
    }
    const authors=Object.keys(obj)
    let max=0
    for (let i=0;i<authors.length;i++)
    {
        let count=0
       const temp=blogs.filter(b=>b.author===authors[i])
       for (let j=0;j<temp.length;j++)
       {
           count+=temp[j].likes
           if(count>max)
       {
           max=count
           refobj.author=temp[j].author
           refobj.likes=max
       }
       }
    }
    return refobj
}

module.exports = {
    dummy,
    totalLikes,
    mostBlogs,
    mostLikes
  }