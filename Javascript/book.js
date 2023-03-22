class Book{
    constructor(
        title,
        author,
        price,
        publisher,
        ISBN,
        readStatus,
        currentPage

    )
    {
        this.title=title;
        this.author=author;
        this.price=price;
        this.publisher=publisher;
        this.ISBN=ISBN;
        this.currentPage=currentPage;
        this.readStatus=readStatus;

    } 
    updatePrice(price)
    {
        this.price=price;
        console.log(this.price)
    }
    updateReadStatus(readStatus)
    {
        this.readStatus=readStatus;
        console.log(this.readStatus);
    }
    updateCurrentPage(currentPage)
    {
        this.currentPage=currentPage;
        console.log(this.currentPage)
    }
}
export default Book;