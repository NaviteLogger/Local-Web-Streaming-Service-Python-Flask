"""Added registration_date to users

Revision ID: ac3c1c0e2957
Revises: 5a5342261a67
Create Date: 2024-02-13 00:59:26.329971

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ac3c1c0e2957'
down_revision = '5a5342261a67'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('registration_date',
               existing_type=sa.DATE(),
               type_=sa.DateTime(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('registration_date',
               existing_type=sa.DateTime(),
               type_=sa.DATE(),
               nullable=False)

    # ### end Alembic commands ###
