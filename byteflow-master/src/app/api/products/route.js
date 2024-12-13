import { openDB } from '@/lib/db';

export async function GET(request) {
    const url = new URL(request.url);
    const recipient = url.searchParams.get('recipient');
    const money = url.searchParams.get('money');

    const priceSegment = money === 'Недорого'
        ? 1
        : money === 'Среднебюджетный'
        ? 2
        : 3;

    try {
        const db = await openDB();

        
        const products = await db.all(
            `SELECT ID_Product, Name_Product, Price_Product, URL_Product_Photo, URL_Product, Recipient_Category
            FROM Product
            WHERE Recipient_Category LIKE ? AND Price_Segment = ?;`,
            [`%${recipient}%`, priceSegment]  
        );

        console.log('Recipient:', recipient);
        console.log('Price Segment:', priceSegment);

        
        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Ошибка при запросе:', error);

        return new Response(
            JSON.stringify({ error: 'Ошибка загрузки данных' }),
            { status: 500 }
        );
    }
}
