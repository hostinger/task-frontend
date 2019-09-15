<template>
    <layout-primary>
        <page-width>

            <transition name="fade">
                <div v-if="clickedCellData !== ''"
                     class="sticky-box"
                     :class="{ 'is-visible' : clickedCellData !== '' }"
                >
                    {{ clickedCellData }}
                </div>
            </transition>

            <div class="table-wrapper">
                <table class="table"
                       @click="(e) => { tableClickHandler(e); }"
                       @keyup.enter="(e) => { tableClickHandler(e); }"
                >
                    <thead>
                        <tr>
                            <th v-for="(heading, headingIndex) in headings"
                                :key="headingIndex"
                                class="table__header-cell"
                            >
                                <button class="table__sort-button"
                                        @click="setSort(heading)"
                                >
                                    <span>
                                        {{ heading }}
                                    </span>
                                    <svg class="table__sort-icon"
                                         :class="{
                                             'is-asc':  heading === sortBy && !sortOrderDesc,
                                             'is-desc': heading === sortBy && sortOrderDesc
                                         }"
                                    >
                                        <use xlink:href="#sort" />
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, rowIndex) in itemsToDisplay"
                            :key="rowIndex"
                            class="table__body-row"
                            :class="{ 'is-active' : (rowIndex === activeRow) }"
                            tabindex="0"
                        >
                            <td v-for="(col, colKey) in row"
                                :key="colKey"
                                :data-colkey="colKey"
                                :data-rowid="rowIndex"
                                v-if="!colKey.startsWith('_')"
                                class="table__body-cell"
                                tabindex="0"
                            >
                                {{ col }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="pagination">
                <div class="pagination__content-primary">
                    <base-button size="sm"
                                 :disabled="!showPrevButton"
                                 @click="setCurrentPage(currentPage - 1)"
                    >
                        Prev
                    </base-button>

                    <base-input id="currentPage"
                                type="number"
                                class="pagination__current"
                                :value="currentPage"
                                @input="setCurrentPage($event.target.value)"
                    >
                        <template slot="before">page</template>
                        <template slot="after">of
                            <span class="pagination__total">{{ totalPages }}</span>
                        </template>
                    </base-input>

                    <base-button size="sm"
                                 :disabled="!showNextButton"
                                 @click="setCurrentPage(currentPage + 1)"
                    >
                        Next
                    </base-button>
                </div>

                <div class="pagination__content-secondary">
                    <base-input id="pageSize"
                                type="number"
                                :value="pageSize"
                                @input="setPageSize($event.target.value)"
                    >
                        <template slot="after">Items per page</template>
                    </base-input>
                </div>

                <div class="pagination__content-tertiary">
                    <base-button size="sm"
                                 theme="secondary"
                                 @click="setPageSize(totalItems)"
                    >
                        View All
                    </base-button>
                </div>
            </div>

        </page-width>
    </layout-primary>
</template>

<script>
import '@/assets/icons/sort.svg';
import data from "@/views/dataTable/data.json";
import LayoutPrimary from "@/components/pageLayout/LayoutPrimary";
import PageWidth from "@/components/pageLayout/PageWidth";
import BaseButton from "@/components/base/BaseButton";
import BaseInput from "@/components/base/BaseInput";

export default {
    name: 'ViewDataTable',
    components: {
        BaseInput,
        BaseButton,
        PageWidth,
        LayoutPrimary,
    },
    data() {
        return {
            itemsRaw: data.data,

            sortBy: 'name',
            sortOrderDesc: false,

            pageSize: 17,
            currentPage: 1,
            pageToOpen: 1,

            activeRow: null,
            clickedCellData: '',
        }
    },
    computed: {
        totalItems() {
            return this.itemsRaw.length;
        },
        headings() {
            return Object.keys(this.itemsRaw[0]).filter(function(key) {
                return !key.startsWith('_');
            });
        },
        itemsSorted() {
            let items = this.itemsRaw;

            if (this.sortBy !== '') {
                items.sort((a, b) => {
                    let order = 1;
                    order = this.sortOrderDesc ? order * (-1) : order;

                    return (a[this.sortBy] > b[this.sortBy]) ? order : order * (-1);
                });
            }

            return items;
        },
        totalPages() {
            return Math.ceil(this.itemsSorted.length / this.pageSize);
        },
        showPrevButton() {
            return this.currentPage > 1;
        },
        showNextButton() {
            return this.currentPage < this.totalPages;
        },
        itemFirstInPage() {
            return (this.currentPage - 1) * this.pageSize;
        },
        itemLastInPage() {
            return this.itemFirstInPage + this.pageSize;
        },
        itemsToDisplay() {
            return this.itemsSorted.slice(this.itemFirstInPage, this.itemLastInPage);
        },
    },
    methods: {
        setSort(key) {
            if ( this.sortBy !== key ) {
                this.sortBy = key;
            } else {
                this.sortOrderDesc = !this.sortOrderDesc;
            }
        },
        setCurrentPage(pageNumber) {
            pageNumber = +pageNumber; // converts to number

            if ( pageNumber < 1 ) {
                pageNumber = 1;
            }
            else if ( pageNumber > this.totalPages ) {
                pageNumber = this.totalPages;
            }

            this.currentPage = pageNumber;
        },
        setPageSize(size) {
            this.pageSize = +size; // converts to number

            if ( size < 5 ) {
                size = 5;
            }
            else if ( size > this.totalItems ) {
                size = this.totalItems;
            }

            this.setCurrentPage(this.currentPage); // revalidates currentPage
        },
        getCellContent(rowId, colKey) {
            return this.itemsSorted[rowId][colKey];
        },
        tableClickHandler(e) {
            const col = e.target;
            const colKey = col.dataset.colkey;
            const rowId = +col.dataset.rowid; // "+" converts to number

            if (col.nodeName === "TD") { // check if not keypress on a row
                this.clickedCellData = this.getCellContent(rowId, colKey);
            }

            this.activeRow = rowId;
        },
    },
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    @include transition(opacity);
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.sticky-box {
    $_width: 250px;

    position: fixed;
    z-index: z-index('page-header');
    top: $page-header-height;
    left: 50%;
    width: $_width;
    margin-left: -$_width/2;
    padding: .5em 1em;
    background-color: $color-highlight-red;
    color: #fff;
    text-align: center;
}

.table {
    $_this: &;
    $_spacing: 1em;

    width: 100%;
    margin: 42px 0 100px;

    &-wrapper {
        margin: $_spacing (-$_spacing/2);
    }

    &__body-cell {
        padding: $_spacing/2 $_spacing;

        &:first-child {
            padding-left: $_spacing/2;
        }

        &:last-child {
            padding-right: $_spacing/2;
        }
    }

    &__header-cell {
        position: relative;
        padding: 0 $_spacing/2;
        padding-bottom: $_spacing*.75;

        &::after {
            content: '';
            position: absolute;
            right: $_spacing/2;
            bottom: $_spacing/2;
            left: $_spacing/2;
            height: 2px;
            background-color: $color-bg-dark;
        }

        &:first-child {
            padding-left: 0;

            &::after {
                left: 0;
            }
        }

        &:last-child {
            padding-right: 0;

            &::after {
                right: 0;
            }
        }
    }

    &__sort-button {
        display: flex;
        z-index: 1;
        align-items: center;
        width: 100%;
        padding: $_spacing/2;
        border: 0;
        background-color: transparent;
        font-weight: 700;
        text-align: left;
        text-transform: capitalize;
        cursor: pointer;

        &:hover,
        &:focus {
            color: $color-link-hover;

            #{$_this}__sort-icon {
                &.is-asc {
                    color: $color-link-hover;
                }

                &.is-desc {
                    fill: $color-link-hover;
                }
            }
        }
    }

    &__sort-icon {
        flex-shrink: 0;
        width: 9px;
        height: 14px;
        margin-left: 5px;
        fill: $color-text-body;
        color: $color-text-body;

        &.is-asc {
            color: $color-link;
        }

        &.is-desc {
            fill: $color-link;
        }
    }

    &__body-row {
        &.is-active {
            background-color: $color-bg-light;
        }
    }
}

.pagination {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    background-color: $color-bg-light;
    box-shadow: 0 0 4px rgba(0, 0, 0, .3);

    &__label {
        padding: .15em .5em;
        font-size: 12px;
        text-transform: uppercase;
        white-space: nowrap;
    }

    &__total {
        padding-left: .1em;
        font-size: 16px;
        font-weight: 600;
    }

    &__current {
        margin: 0 .5em;
    }

    &__content-primary {
        display: flex;
        align-items: inherit;
        order: 2;
        padding: 0 1em;
    }

    &__content-secondary {
        order: 1;
    }

    &__content-tertiary {
        order: 3;
    }
}
</style>
