<div class="flex max-w-5xl flex-col mx-auto pb-4 pt-12 custom-font">
    <div class="flex flex-line">
        <div class="join mr-4">
            <select class="select select-bordered border-2 join-item">
                <option disabled selected>Filter by Category</option>
                <option>All</option>
                <option>Food</option>
                <option>Daily</option>
                <option>Entertainment</option>
            </select>
        </div>
        <div class="join mr-4">
            <select class="select select-bordered border-2 join-item">
                <option disabled selected>Filter by Type</option>
                <option>All</option>
                <option>Income</option>
                <option>Expense</option>
            </select>
        </div>
        <!-- You can add more filter options as needed, like date range, etc. -->
        <div class="join">
            <select class="select select-bordered border-2 join-item">
                <option disabled selected>Filter by Date</option>
                <option>All</option>
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
            </select>
        </div>
    </div>
</div>

<style>
    ::placeholder {
        color: black;
    }
    /* .input-bordered {
        border-color: #007349;
        border-width: 1.5px;
    } */
</style>
