from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, DateTime, func
from flask_app.models.base_model import Base

class User(Base):
